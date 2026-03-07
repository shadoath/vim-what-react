import { VimKey, T, H, TwoCol } from './VimKey'

export const Lesson1 = () => (
  <TwoCol
    left={
      <>
        <H>Move & survive:</H>
        <T>
          <VimKey k='h' v='motion' />
          <VimKey k='j' v='motion' />
          <VimKey k='k' v='motion' />
          <VimKey k='l' v='motion' /> are the cursor keys — left, down, up, right.
          Much closer to home row than arrow keys!
        </T>
        <T>
          <VimKey k='i' v='insert' /> enters insert mode (cursor becomes a line).
          Use <VimKey k='Esc' /> to return to normal mode.
        </T>
        <T>
          <VimKey k='a' v='insert' /> enters insert mode <em>after</em> the cursor
          (append). Useful for adding to the end of a word.
        </T>
        <T>
          <VimKey k='x' v='command' /> deletes the character under the cursor.
        </T>
      </>
    }
    right={
      <>
        <H>Extras:</H>
        <T>
          <VimKey k='u' v='command' /> undoes the last action.{' '}
          <VimKey k='CTRL-R' /> redoes it.
        </T>
        <T>
          <VimKey k=':' v='extra' />
          <VimKey k='w' v='command' /> + Enter saves.{' '}
          <VimKey k=':' v='extra' />
          <VimKey k='q' v='command' /> + Enter quits.
        </T>
        <T>
          Add a count before any motion: <VimKey k='4' />
          <VimKey k='j' v='motion' /> moves down 4 lines,{' '}
          <VimKey k='3' />
          <VimKey k='x' v='command' /> deletes 3 characters.
        </T>
        <T>
          <em>
            Insert mode works like a regular editor — arrow keys, backspace, and
            delete all work normally.
          </em>
        </T>
      </>
    }
  />
)
