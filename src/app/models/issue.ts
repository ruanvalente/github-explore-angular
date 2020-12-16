export interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}
