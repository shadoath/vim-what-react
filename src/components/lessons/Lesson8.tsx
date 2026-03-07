import { VimKey, T, H, TwoCol } from './VimKey'

export const Lesson8 = () => (
  <TwoCol
    left={
      <>
        <H>Navigate the file:</H>
        <T>
          <VimKey k='G' v='motion' /> jumps to the end of the file. A count
          before it jumps to that line: <VimKey k='42' />
          <VimKey k='G' v='motion' /> goes to line 42.
        </T>
        <T>
          <VimKey k='H' v='motion' />
          <VimKey k='M' v='motion' />
          <VimKey k='L' v='motion' /> jump to the top, middle, and bottom of the
          visible screen — without scrolling.
        </T>
        <T>
          <VimKey k='K' v='extra' /> looks up the word under the cursor: Vim help,
          man pages, or your configured keywordprg.
        </T>
        <T>
          <VimKey k='%' v='motion' /> jumps between matching pairs:{' '}
          <VimKey k='(' />
          <VimKey k=')' />, <VimKey k='[' />
          <VimKey k=']' />, <VimKey k='{' />
          <VimKey k='}' />. Works across lines.
        </T>
      </>
    }
    right={
      <>
        <H>Sentence & paragraph:</H>
        <T>
          <VimKey k='(' v='motion' /> and <VimKey k=')' v='motion' /> jump to the
          start of the previous/next sentence.
        </T>
        <T>
          <VimKey k='{' v='motion' /> and <VimKey k='}' v='motion' /> jump to the
          previous/next empty line (paragraph boundary).
        </T>
        <T>
          <VimKey k='[' />
          <VimKey k='[' /> jumps to the previous <VimKey k='{' /> in column 0
          (section start). <VimKey k=']' />
          <VimKey k=']' /> jumps to the next.
        </T>
        <T>
          All are motions — combine with operators:{' '}
          <VimKey k='d' v='operator' />
          <VimKey k='}' v='motion' /> deletes to the next paragraph break.
        </T>
      </>
    }
  />
)
