
export interface Adventure {
    id: number;
    name: string;
    mainImage: string;
    images: string[];
    smallDescription: string;
    description: string;
}

export const fromAdventureJson = (adventure: Adventure) => {
    return {
        id: adventure.id,
        name: adventure.name,
        mainImage: adventure.mainImage,
        images: adventure.images,
        smallDescription: adventure.smallDescription,
        description: adventure.description,
    }
}

export default Adventure;