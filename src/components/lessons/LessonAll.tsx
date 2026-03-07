import type React from 'react'
import { Box, Typography } from '@mui/material'
import { VimKey, T, H } from './VimKey'

export const LessonAll = () => (
  <Box sx={{ p: 1, display: 'flex', gap: 1.5, textAlign: 'left' }}>
    {/* Column 1: Legend */}
    <Box sx={{ flex: 1 }}>
      {(
        [
          {
            k: 'motion',
            v: 'motion',
            label: <>moves the cursor, or defines the range for an operator</>,
          },
          {
            k: 'command',
            v: 'command',
            label: (
              <>
                direct action command, if{' '}
                <span style={{ color: '#ef4444' }}>red</span>, it enters insert
                mode
              </>
            ),
          },
          {
            k: 'operator',
            v: 'operator',
            label: (
              <>
                requires a motion afterwards, operates between cursor &
                destination
              </>
            ),
          },
          {
            k: 'extra',
            v: 'extra',
            label: <>special functions, requires extra input</>,
          },
        ] as {
          k: string
          v: Parameters<typeof VimKey>[0]['v']
          label: React.ReactNode
        }[]
      ).map(({ k, v, label }) => (
        <Box
          key={k}
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 0.5,
            py: 0.35,
            borderBottom: '1px solid rgba(0,0,0,0.06)',
          }}
        >
          <VimKey k={k} v={v} />
          <Typography sx={{ fontSize: 10, lineHeight: 1.4 }}>
            {label}
          </Typography>
        </Box>
      ))}
      <T>
        <VimKey k='q' v='extra' />• commands with a dot need a char command
        afterwards
      </T>
      <Typography
        sx={{ fontSize: 9.5, opacity: 0.65, lineHeight: 1.5, mt: 0.4, mb: 0.4 }}
      >
        bol = beginning of line, eol = end of line, mk = mark, yank = copy
      </Typography>
      <T>
        words: <VimKey k='quux' />
        <VimKey k='(' />
        <VimKey k='foo' />
        <VimKey k=',' />
        &thinsp;
        <VimKey k='bar' />
        <VimKey k=',' />
        &thinsp;
        <VimKey k='baz' />
        <VimKey k=')' />
        <VimKey k=';' />
      </T>
      <T>
        WORDs: <VimKey k='quux(foo,' />
        &thinsp;
        <VimKey k='bar,' />
        &thinsp;
        <VimKey k='baz);' />
      </T>
    </Box>

    {/* Column 2: Commands */}
    <Box sx={{ flex: 1, borderLeft: '1px solid rgba(0,0,0,0.1)', pl: 1.5 }}>
      <H>Main command line commands ('ex'):</H>
      <Typography
        sx={{ fontSize: 10, fontFamily: 'monospace', lineHeight: 1.6 }}
      >
        :w (save), :q (quit), :q! (quit w/o saving)
        <br />
        :e f (open file f),
        <br />
        :%s/x/y/g (replace 'x' by 'y' filewise),
        <br />
        :h (help in vim), :new (new file in vim),
      </Typography>
      <Box sx={{ mt: 0.5 }}>
        <H>Other important commands:</H>
        <Typography
          sx={{ fontSize: 10, fontFamily: 'monospace', lineHeight: 1.6 }}
        >
          CTRL-R: redo (vim),
          <br />
          CTRL-F/-B: page up/down,
          <br />
          CTRL-E/-Y: scroll line up/down,
          <br />
          CTRL-V: block-visual mode (vim only)
        </Typography>
      </Box>
      <Box sx={{ mt: 0.5 }}>
        <H>Visual mode:</H>
        <T>
          Move around and type operator to act on selected region (vim only)
        </T>
      </Box>
    </Box>

    {/* Column 3: Notes */}
    <Box sx={{ flex: 1, borderLeft: '1px solid rgba(0,0,0,0.1)', pl: 1.5 }}>
      <H>Notes:</H>
      {(
        [
          <>
            use{' '}
            <Box component='span' sx={{ fontFamily: 'monospace' }}>
              "x
            </Box>{' '}
            before a yank/paste/del to use that register (x=a..z,*) — e.g.{' '}
            <Box component='span' sx={{ fontFamily: 'monospace' }}>
              "ay$
            </Box>{' '}
            copies to reg 'a'
          </>,
          <>
            type a number before any action to repeat it — e.g. 2p, d2w, 5i, d4j
          </>,
          <>
            duplicate operator to act on current line — dd = delete line, {'>>'}{' '}
            = indent
          </>,
          <>
            <VimKey k='ZZ' v='command' /> save & quit,&ensp;
            <VimKey k='ZQ' v='command' /> quit w/o saving
          </>,
          <>zt: scroll cursor to top, zb: bottom, zz: center</>,
          <>gg: top of file (vim only), gf: open file under cursor</>,
        ] as React.ReactNode[]
      ).map((note, i, arr) => (
        <Box
          key={i}
          sx={{
            display: 'flex',
            gap: 0.5,
            py: 0.35,
            borderBottom:
              i < arr.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none',
          }}
        >
          <Typography
            sx={{
              fontSize: 10,
              color: '#ef4444',
              fontWeight: 'bold',
              flexShrink: 0,
              lineHeight: 1.5,
            }}
          >
            ({i + 1})
          </Typography>
          <Typography component='div' sx={{ fontSize: 10, lineHeight: 1.5 }}>
            {note}
          </Typography>
        </Box>
      ))}
    </Box>
  </Box>
)
