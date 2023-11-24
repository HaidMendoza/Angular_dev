export interface User{
    name: string;
    job: string;
}
export interface Respuesta {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data:Usuario[]; 
    support: {
      url: string;
      text: string;
    };
}

export interface Usuario {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
  }