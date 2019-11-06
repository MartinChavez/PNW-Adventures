
export interface Adventure {
    id: number;
    name: string;
    imageUrl: string;
    smallDescription: string;
    description: string;
}

export const fromAdventureJson = (adventure: Adventure) => {
    return {
        id: adventure.id,
        name: adventure.name,
        imageUrl: adventure.imageUrl,
        smallDescription: adventure.smallDescription,
        description: adventure.description,
    }
}

export default Adventure;