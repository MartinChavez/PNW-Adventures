
export interface Adventure {
    id: number;
    name: string;
    path: string;
    mainImage: string;
    images: string[];
    smallDescription: string;
}

export const fromAdventureJson = (adventure: Adventure) => {
    return {
        id: adventure.id,
        name: adventure.name,
        path: adventure.path,
        mainImage: adventure.mainImage,
        images: adventure.images,
        smallDescription: adventure.smallDescription
    }
}

export default Adventure;