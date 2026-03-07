import { VimKey, T, H, TwoCol } from './VimKey'

export const Lesson6 = () => (
  <TwoCol
    left={<>
      <T><VimKey k='%' v='motion' /> jumps between matching pairs of <VimKey k='(' /><VimKey k=')' />, <VimKey k='[' /><VimKey k=']' />, <VimKey k='{' /><VimKey k='}' />, etc.</T>
      <T><VimKey k='H' v='motion' /><VimKey k='M' v='motion' /><VimKey k='L' v='motion' /> jump directly to the top/middle/bottom of the screen.</T>
      <T><VimKey k='G' v='motion' /> jumps to the end of the file, or to the line number typed before it.</T>
      <T><VimKey k='-' v='motion' /> / <VimKey k='+' v='motion' /> jump to the previous/next line.</T>
      <T><VimKey k='K' v='extra' /> jumps to the help for the word under the cursor: vim help, man page under unix, etc.</T>
    </>}
    right={<>
      <H>More motions:</H>
      <T><VimKey k='(' v='motion' /> and <VimKey k=')' v='motion' /> jump to the beginning/end of the current sentence.</T>
      <T><VimKey k='{' v='motion' /> and <VimKey k='}' v='motion' /> jump to the previous/next empty line.</T>
      <T><VimKey k='[[' v='motion' /> jumps to the previous {'{'} in column 0.</T>
      <T><VimKey k=']]' v='motion' /> jumps to the next {'{'} in column 0.</T>
    </>}
  />
)
