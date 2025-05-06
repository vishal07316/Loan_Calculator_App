import React, { useContext } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, useTheme } from '@mui/material';
import { AppContext } from '../context/AppContext';

const AmortizationTable = () => {
  const { amortization } = useContext(AppContext);
  const [page, setPage] = React.useState(0);
  const rowsPerPage = 10;
  const theme = useTheme();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  if (!amortization.length) return null;

  return (
    <TableContainer
      sx={{
        maxWidth: { xs: '100%', sm: 600 }, // Match LoanForm width
        mx: 'auto', // Center the table
        overflowX: 'auto',
        p: { xs: 1, sm: 2 },
        bgcolor: 'background.paper',
        borderRadius: 2,
        ...(theme.palette.mode === 'dark'
          ? {
              border: '1px solid',
              borderColor: 'text.secondary',
              boxShadow: 'none',
            }
          : {
              boxShadow: 1,
            }),
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                color: 'text.primary',
                fontSize: { xs: '0.8rem', sm: '1rem' },
                p: { xs: 1, sm: 2 },
                whiteSpace: 'nowrap', // Prevent text wrapping
                width: '20%', // Approximate equal width for each column
              }}
            >
              Month
            </TableCell>
            <TableCell
              sx={{
                color: 'text.primary',
                fontSize: { xs: '0.8rem', sm: '1rem' },
                p: { xs: 1, sm: 2 },
                whiteSpace: 'nowrap',
                width: '20%',
              }}
            >
              EMI
            </TableCell>
            <TableCell
              sx={{
                color: 'text.primary',
                fontSize: { xs: '0.8rem', sm: '1rem' },
                p: { xs: 1, sm: 2 },
                whiteSpace: 'nowrap',
                width: '20%',
              }}
            >
              Principal
            </TableCell>
            <TableCell
              sx={{
                color: 'text.primary',
                fontSize: { xs: '0.8rem', sm: '1rem' },
                p: { xs: 1, sm: 2 },
                whiteSpace: 'nowrap',
                width: '20%',
              }}
            >
              Interest
            </TableCell>
            <TableCell
              sx={{
                color: 'text.primary',
                fontSize: { xs: '0.8rem', sm: '1rem' },
                p: { xs: 1, sm: 2 },
                whiteSpace: 'nowrap',
                width: '20%',
              }}
            >
              Balance
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {amortization
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => (
              <TableRow key={row.month}>
                <TableCell
                  sx={{
                    color: 'text.primary',
                    fontSize: { xs: '0.8rem', sm: '1rem' },
                    p: { xs: 1, sm: 2 },
                    whiteSpace: 'nowrap',
                  }}
                >
                  {row.month}
                </TableCell>
                <TableCell
                  sx={{
                    color: 'text.primary',
                    fontSize: { xs: '0.8rem', sm: '1rem' },
                    p: { xs: 1, sm: 2 },
                    whiteSpace: 'nowrap',
                  }}
                >
                  {row.emi}
                </TableCell>
                <TableCell
                  sx={{
                    color: 'text.primary',
                    fontSize: { xs: '0.8rem', sm: '1rem' },
                    p: { xs: 1, sm: 2 },
                    whiteSpace: 'nowrap',
                  }}
                >
                  {row.principal}
                </TableCell>
                <TableCell
                  sx={{
                    color: 'text.primary',
                    fontSize: { xs: '0.8rem', sm: '1rem' },
                    p: { xs: 1, sm: 2 },
                    whiteSpace: 'nowrap',
                  }}
                >
                  {row.interest}
                </TableCell>
                <TableCell
                  sx={{
                    color: 'text.primary',
                    fontSize: { xs: '0.8rem', sm: '1rem' },
                    p: { xs: 1, sm: 2 },
                    whiteSpace: 'nowrap',
                  }}
                >
                  {row.balance}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={amortization.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[10]}
        sx={{ color: 'text.primary', fontSize: { xs: '0.8rem', sm: '1rem' } }}
      />
    </TableContainer>
  );
};

export default AmortizationTable;