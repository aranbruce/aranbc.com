export interface BlogMetadata {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
}

export interface BlogPost {
  metadata: BlogMetadata;
  slug: string;
  content: string;
}

export interface BlogParams {
  slug: string;
}
