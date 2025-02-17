export interface PostCardItemSchema {
  id: number;
  imageUrl: string;
  title: string;
  thumbnailUrl: string;
  point: number;
  target: string;
  questionCount: number;
  role: 'all' | 'designer' | 'planner' | 'developer';
}

export interface CarouselItemSchema {
  id: number;
  imageUrl: string;
  title: string;
}
