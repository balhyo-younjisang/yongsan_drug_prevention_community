export interface BaseWritePost {
  postInfo: {
    postData: { title: string; content: string };
    changePostTitleHandler: React.ChangeEventHandler<HTMLInputElement>;
    changePostContentHandler: React.ChangeEventHandler<HTMLTextAreaElement>;
  };
  submitPostHandler: React.FormEventHandler<HTMLButtonElement>;
}
