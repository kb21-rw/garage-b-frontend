export interface RichText {
  type: string;
  children: {
    text: string;
  }[];
}

export type RootNodeType = RootNode;

export interface RichTextType {
  content: RootNode[];
}
