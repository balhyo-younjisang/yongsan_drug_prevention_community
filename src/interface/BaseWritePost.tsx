export interface BaseWritePost {
  postInfo: {
    postData: { title: string; content: string; id: string; password: string };
    changePostTitleHandler: React.ChangeEventHandler<HTMLInputElement>;
    changePostContentHandler: React.ChangeEventHandler<HTMLTextAreaElement>;
    changeAuthorIdHandler: React.ChangeEventHandler<HTMLInputElement>;
    changeAuthorPasswordHandler: React.ChangeEventHandler<HTMLInputElement>;
  };
  submitPostHandler: React.FormEventHandler<HTMLButtonElement>;
}
