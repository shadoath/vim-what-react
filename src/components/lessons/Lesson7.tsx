import { Box } from '@mui/material'
import { VimKey, T, H, TwoCol } from './VimKey'

export const Lesson7 = () => (
  <TwoCol
    left={
      <>
        <H>Basics:</H>
        <T>
          <VimKey k='J' v='command' /> joins the current line with the next, or
          all lines in the current visual selection.
        </T>
        <T>
          <VimKey k='r' v='command' /> followed by any character replaces the
          current character with that one.
        </T>
        <T>
          <VimKey k='C' v='insert' /> is shorthand for{' '}
          <VimKey k='c' v='operator' />
          <VimKey k='$' v='motion' />, changes to end of line.
        </T>
        <T>
          <VimKey k='D' v='command' /> is shorthand for{' '}
          <VimKey k='d' v='operator' />
          <VimKey k='$' v='motion' />, deletes to end of line.
        </T>
        <T>
          <VimKey k='Y' v='command' /> is shorthand for{' '}
          <VimKey k='y' v='operator' />
          <VimKey k='y' v='operator' />, yanks the whole line.
        </T>
        <T>
          <VimKey k='s' v='insert' /> deletes the character under the cursor and
          enters insert mode.
        </T>
        <T>
          <VimKey k='S' v='insert' /> clears the current line and enters insert
          mode.
        </T>
      </>
    }
    right={
      <>
        <H>Extras:</H>
        <T>
          <VimKey k='>' v='operator' /> and a motion to indent one or more
          lines.
        </T>
        <T>
          <VimKey k='<' v='operator' /> and a motion to unindent.
        </T>
        <T>
          <VimKey k='=' v='operator' /> and a motion to reformat a range of
          text.
        </T>
        <T>
          All work in visual mode, or can be repeated (
          <VimKey k='>>' v='operator' />, etc.) to operate on the current line.
        </T>
        <T>
          <VimKey k='~' v='command' /> toggles the case of the character under
          the cursor.
        </T>
        <Box
          sx={{
            mt: 0.75,
            p: 0.75,
            borderRadius: 1,
            backgroundColor: '#f0fdf4',
            border: '1px solid #86efac',
          }}
        >
          <T>
            Now go grab the full cheat sheet and learn the rest. Start with{' '}
            <VimKey k='i' v='insert' />
            <VimKey k='a' v='insert' />
            <VimKey k=';' v='extra' /> and <VimKey k=',' />. Piece of cake!
          </T>
        </Box>
      </>
    }
  />
)
