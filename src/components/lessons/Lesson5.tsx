import { VimKey, T, H, TwoCol } from './VimKey'

export const Lesson5 = () => (
  <TwoCol
    left={
      <>
        <H>Marks:</H>
        <T>
          Use <VimKey k='m' v='extra' /> followed by an <VimKey k='a' />–
          <VimKey k='z' /> character to set a mark.
        </T>
        <T>
          Use <VimKey k='`' v='motion' /> followed by a character to go to that
          mark.
        </T>
        <T>
          Use <VimKey k="'" v='motion' /> and a character to go to the first
          non-blank in that line.
        </T>
        <T>
          <VimKey k='A' />–<VimKey k='Z' /> marks are global (across files),{' '}
          <VimKey k='a' />–<VimKey k='z' /> are per-buffer.
        </T>
        <T>
          <VimKey k='`.' v='motion' /> refers to the position of the last
          modification.
        </T>
      </>
    }
    right={
      <>
        <H>Macros:</H>
        <T>
          Use <VimKey k='q' v='extra' /> followed by an <VimKey k='a' />–
          <VimKey k='z' /> character to start recording.
        </T>
        <T>
          Use <VimKey k='q' v='extra' /> again to stop recording.
        </T>
        <T>
          <VimKey k='@' v='extra' /> followed by a character replays that macro.
        </T>
        <T>
          <VimKey k='@@' v='extra' /> repeats the last macro played.
        </T>
      </>
    }
  />
)
