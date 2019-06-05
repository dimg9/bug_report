export interface Comm {
  id: string;
  reporter: string;
  description: string;
}

export interface BugTable {
  id: string;
  title: string;
  description: string;
  priority: number;
  reporter: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  comments: Array<Comm>;
}
