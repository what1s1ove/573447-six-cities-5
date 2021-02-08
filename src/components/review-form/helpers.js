import {CommentLength, ReviewFormKey} from './common';

const checkIsValidComment = (comment) => {
  const hasComment = Boolean(comment);
  const isCorrectLength = hasComment && comment.length >= CommentLength.MIN;

  return hasComment && isCorrectLength;
};

const checkIsFormValid = (formState) => {
  const hasRating = Boolean(formState[ReviewFormKey.RARING]);
  const isValidComment = checkIsValidComment(formState[ReviewFormKey.COMMENT]);

  return hasRating && isValidComment;
};

export {checkIsFormValid};
