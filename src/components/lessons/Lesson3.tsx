import { VimKey, T, H, TwoCol } from './VimKey'

export const Lesson3 = () => (
  <TwoCol
    left={
      <>
        <H>Basics:</H>
        <T>
          Use <VimKey k='y' v='operator' /> followed by any motion to 'yank'
          (copy).
        </T>
        <T>
          Use <VimKey k='p' v='command' /> to paste after the cursor (if
          charwise: right, if linewise: below).
        </T>
        <T>
          Use <VimKey k='P' v='command' /> to paste before.
        </T>
        <T>
          <VimKey k='y' v='operator' />
          <VimKey k='y' v='operator' /> copies the current line.
        </T>
        <T>
          <VimKey k='y' v='operator' /> also works in visual mode.
        </T>
        <T>
          Text deleted with <VimKey k='d' v='operator' />,{' '}
          <VimKey k='c' v='operator' />, <VimKey k='x' v='command' />… is also
          copied!
        </T>
      </>
    }
    right={
      <>
        <H>Extras:</H>
        <T>
          <VimKey k='"' v='extra' /> and an <VimKey k='a' />–<VimKey k='z' />{' '}
          character before any yank/delete/paste command chooses a register.
        </T>
        <T>
          An <VimKey k='A' />–<VimKey k='Z' /> register before yank/delete means
          "append-copy".
        </T>
        <T>
          <VimKey k='"*' v='extra' /> or <VimKey k='"+' v='extra' /> select the
          system clipboard.
        </T>
        <T>
          <VimKey k='o' v='insert' /> enters insert mode in a new empty line
          below the current one.
        </T>
        <T>
          <VimKey k='O' v='insert' /> does the same above the current line.
        </T>
      </>
    }
  />
)
