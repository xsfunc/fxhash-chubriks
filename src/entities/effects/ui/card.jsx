import { Card, IconButton, Stack, Typography } from '@mui/joy'
import { useState } from 'react'
import ArrowUp from '~icons/clarity/angle-line'

export function EffectCard({
  effectOptions,
  effectComponent,
  deleteEffect,
}) {
  const [open, setOpen] = useState(true)
  return <Card
    sx={{ py: 1, gap: 0, mb: 0.5, borderRadius: 'sm' }}
    variant='outlined'
  >
    <Stack
      sx={{ m: 0, p: 0 }}
      direction='row'
      alignItems='center'
      justifyContent='space-between'
    >
      <Stack gap={0.5} direction='row' >
        <Typography textOverflow='clip' level="body1" sx={{ mb: 0.5 }}>
          {effectOptions.name}
        </Typography>
        <Typography level="body1" color='neutral' sx={{ mb: 0.5 }}>
          ({effectOptions.id})
        </Typography>
      </Stack>
      <Stack direction='row'>
        <HideOptions open={open} setOpen={setOpen} />
        {deleteEffect}
      </Stack>
    </Stack>
    {open && effectComponent}
  </Card>
}

function HideOptions({ open, setOpen }) {
  return <IconButton
    aria-label="delete node"
    variant="plain"
    color="neutral"
    size="sm"
    className='nodrag'
    style={{ transform: `rotate(${open ? 0 : 180}deg)` }}
    onClick={() => setOpen(!open)}
  >
    <ArrowUp />
  </IconButton>
}
