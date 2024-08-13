export type TProfile = {
    id?: number,
    name: string,
    city_id?: number,
    document: number | null,
    phone_number: number | string,
    whatsapp_number: number | string,
    email: string,
    about: string,
    active: number,
    birthdate: string,
    payment_date?: string,
    created_at?: string,
    file?: object | undefined,
    profession: string
}
