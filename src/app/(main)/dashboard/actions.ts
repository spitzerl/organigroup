"use server"

import { prisma } from "@/lib/prisma";

export async function getDashboardEvents(userId: string) {
  try {
    const events = await prisma.event.findMany({
      where: {
        // Condition 1: The event belongs to a group the user is a member of
        group: {
          members: {
            some: {
              userId: userId
            }
          }
        },
        // AND one of the following visibility conditions must be true:
        OR: [
          // Public events within the group
          { isPrivate: false },
          
          // Private events, but the user is explicitly invited
          {
            isPrivate: true,
            invitations: {
              some: {
                userId: userId
              }
            }
          },
          
          // The user is the creator of the event
          { creatorId: userId }
        ]
      },
      include: {
        group: {
          select: { name: true }
        },
        creator: {
          select: { name: true, image: true }
        },
        rsvps: {
          where: { userId: userId },
          select: { status: true }
        },
        _count: {
          select: {
            rsvps: {
              where: { status: "ATTENDING" }
            }
          }
        }
      },
      orderBy: {
        date: 'asc'
      }
    });

    return events;
  } catch (error) {
    console.error("Failed to fetch dashboard events:", error);
    throw new Error("Impossible de récupérer les événements.");
  }
}
