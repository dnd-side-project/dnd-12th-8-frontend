export interface PostCardItemSchema {
  projectId: number;
  logoImageUrl: string;
  title: string;
  thumbnailImageUrl: string;
  point: number;
  questionCount: number;
  targetJob: 'ALL' | 'DESIGNER' | 'PLANNER' | 'DEVELOPER';
}

export interface CarouselItemSchema {
  id: number;
  imageUrl: string;
  title: string;
}
