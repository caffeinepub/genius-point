import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Inquiry {
    city: string;
    name: string;
    childAge: bigint;
    courseInterest: string;
    phone: string;
}
export interface backendInterface {
    deleteInquiry(phone: string): Promise<void>;
    getAllInquiries(): Promise<Array<Inquiry>>;
    getInquiry(phone: string): Promise<Inquiry>;
    submitInquiry(inquiry: Inquiry): Promise<void>;
}
