import { VimKey, T, H, TwoCol } from './VimKey'

export const Lesson4 = () => (
  <TwoCol
    left={
      <>
        <H>Basics:</H>
        <T>
          <VimKey k='/' v='motion' /> is the basic search motion – type the text
          you're searching for, then press Enter. Being a motion, you can use it
          after an operator or in visual mode.
        </T>
        <T>
          <VimKey k='?' v='motion' /> does the same, backwards.
        </T>
        <T>
          <VimKey k='n' v='motion' /> repeats the last search in the same
          direction. <VimKey k='N' v='motion' /> repeats it in reverse.
        </T>
        <T>
          The search target is a regular expression: <VimKey k='a*b' /> means
          zero or more 'a's followed by 'b', <VimKey k='^abc' /> matches 'abc'
          at the start of a line, <VimKey k='[0-9]' /> matches a digit, etc.
        </T>
      </>
    }
    right={
      <>
        <H>Extras:</H>
        <T>
          <VimKey k='*' v='motion' /> searches forward for the next instance of
          the identifier under the cursor.
        </T>
        <T>
          <VimKey k='#' v='motion' /> does the same backwards.
        </T>
      </>
    }
  />
)
