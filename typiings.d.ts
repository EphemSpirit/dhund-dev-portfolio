export interface ComponentUniversal {
    mobile?: boolean
}

export interface Project {
    id: number;
    image_url: string;
    slug: string;
    title: string;
    short_description: string;
    description: string;
    techs: string[];
}