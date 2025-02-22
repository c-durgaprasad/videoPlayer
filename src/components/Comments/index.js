import {useState} from 'react'

import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
} from './styledComponents'

const Comments = () => {
  const [name, setName] = useState('')
  const [comment, setCommentText] = useState('')
  const onChangeName = event => setName(event.target.value)
  const onChangeComment = event => setCommentText(event.target.value)

  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form>
        <NameInput
          type="text"
          placeholder="Your name"
          value={name}
          onChange={onChangeName}
        />
        <CommentTextInput
          placeholder="Your comment"
          rows="6"
          value={comment}
          onChange={onChangeComment}
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>
    </CommentsContainer>
  )
}

export default Comments
