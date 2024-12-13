export interface Pokemon {
    name: string,
    sprites: {
        front_default: string;
    }
    cries: {
        latest: string,
        legacy: string,
    }
}