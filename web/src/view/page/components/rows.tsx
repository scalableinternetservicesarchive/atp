import {
	Button,
	makeStyles,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableFooter,
	TableHead,
	TableRow
} from '@material-ui/core'
import * as React from 'react'
import { Link } from '../../nav/Link'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})

interface EventEntry {
  name: string
  zoom: string
}

interface RowsProps {
  entries: EventEntry[]
  onAdd(name: string, zoom: string): void
}

export function Rows(prop: RowsProps) {
  const classes = useStyles()
  const classNameInput = React.createRef<HTMLInputElement>()
  const zoomLinkInput = React.createRef<HTMLInputElement>()
  return (
    <React.Fragment>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Class Name</TableCell>
              <TableCell></TableCell>
              <TableCell align="right">Zoom Link</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {prop.entries.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell></TableCell>
                <TableCell align="right">
                  {' '}
                  <Link href={row.zoom}>Zoom</Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell>
                <input ref={classNameInput} type="text" placeholder="Class Name" />
              </TableCell>
              <TableCell>
                <input ref={zoomLinkInput} type="text" placeholder="Zoom Link" />
              </TableCell>
              <TableCell align="right">
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => {
                    const className = classNameInput.current!.value
                    const zoomLink = zoomLinkInput.current!.value
                    // const new_rows = [...rows, createData(className, zoomLink)]
                    prop.onAdd(className, zoomLink)
                    classNameInput.current!.value = ''
                    zoomLinkInput.current!.value = ''
                  }}
                >
                  Add
                </Button>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </React.Fragment>
  )
}