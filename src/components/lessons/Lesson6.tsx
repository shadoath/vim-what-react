import { VimKey, T, H, TwoCol } from './VimKey'

export const Lesson6 = () => (
  <TwoCol
    left={
      <>
        <H>Search:</H>
        <T>
          <VimKey k='/' v='motion' /> searches forward — type your pattern and
          press Enter. Being a motion, you can use it after an operator:{' '}
          <VimKey k='d' v='operator' />
          <VimKey k='/' v='motion' />
          <VimKey k='foo' /> deletes up to "foo".
        </T>
        <T>
          <VimKey k='?' v='motion' /> searches backwards.
        </T>
        <T>
          <VimKey k='n' v='motion' /> jumps to the next match in the same
          direction. <VimKey k='N' v='motion' /> jumps in the opposite direction.
        </T>
        <T>
          The pattern is a regular expression: <VimKey k='^foo' /> matches "foo"
          at line start, <VimKey k='bar$' /> at line end,{' '}
          <VimKey k='[0-9]' /> matches any digit.
        </T>
      </>
    }
    right={
      <>
        <H>Quick search:</H>
        <T>
          <VimKey k='*' v='motion' /> searches forward for the next occurrence of
          the word under the cursor — no typing needed.
        </T>
        <T>
          <VimKey k='#' v='motion' /> does the same backwards.
        </T>
        <T>
          After <VimKey k='*' v='motion' /> or <VimKey k='#' v='motion' />, use{' '}
          <VimKey k='n' v='motion' />/<VimKey k='N' v='motion' /> to continue
          jumping through matches.
        </T>
        <T>
          To clear the search highlight: <VimKey k=':' v='extra' />
          <VimKey k='noh' /> + Enter, or set a mapping in your vimrc.
        </T>
      </>
    }
  />
)
