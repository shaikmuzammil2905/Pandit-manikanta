export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  benefits: string[];
}

export interface ConsultationFormData {
  fullName: string;
  phone: string;
  dob: string;
  tob: string;
  pob: string;
  service: string;
  concern: string;
}
