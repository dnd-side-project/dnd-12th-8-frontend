export interface PostCardItemSchema {
  id: number;
  imageUrl: string;
  title: string;
  thumbnailUrl: string;
  point: number;
  target: string;
  questionCount: number;
  role: 'ALL' | 'DESIGNER' | 'PLANNER' | 'DEVELOPER';
}

export interface CarouselItemSchema {
  id: number;
  imageUrl: string;
  title: string;
}
