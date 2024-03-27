import { doctorReview } from "./doctorReview";

export class Review {
    constructor(public patient_ID?: number,
    public doctor_ID?: number,
    public doctorReview?:doctorReview){}
}
