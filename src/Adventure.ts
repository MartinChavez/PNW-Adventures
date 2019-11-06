
export interface Adventure {
    name: string;
    imageUrl: string;
    smallDescription: string;
    description: string;
}

export const fromAdventureJson = (adventure: Adventure) => {
    return {
        name: adventure.name,
        imageUrl: adventure.imageUrl,
        smallDescription: adventure.smallDescription,
        description: adventure.description,
    }
}

export default Adventure;