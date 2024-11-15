import * as React from 'react';
import {
  ColumnDef,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import styled from 'styled-components';

import { Input } from '~/components/common';

type User = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  progress: number;
  status: string;
};

const Home = () => {
  const [data, setData] = React.useState<User[]>([]);

  React.useEffect(() => {
    try {
      const getUser = async () => {
        const res = await fetch('/data/data.json');
        const data = await res.json();
        setData(data);
      };

      getUser();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const columnHelper = createColumnHelper<User>();
  const defaultColumns: ColumnDef<User>[] = [
    columnHelper.group({
      header: '선택',
      columns: [
        columnHelper.display({
          id: 'actions',
          cell: () => <Input.Field type="checkbox" />,
        }),
      ],
    }),
    columnHelper.group({
      header: 'Name',
      columns: [
        {
          accessorKey: 'firstName',
          header: 'firstName',
          // size: 120,
        },
        {
          accessorKey: 'lastName',
          header: 'lastName',
        },
      ],
    }),
    {
      header: 'Age',
      columns: [
        columnHelper.accessor('age', {
          header: '',
        }),
      ],
    },
  ];

  const [columns] = React.useState(defaultColumns);

  // useReactTable로 테이블 구조 정의
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    defaultColumn: {
      size: 50, // 기본값은 150
      minSize: 100,
      maxSize: 500,
    },
    columnResizeMode: 'onChange', // 기본값은 onEnd
    enableMultiRowSelection: false, // row 여러개 선택
  });

  return (
    <Container>
      <table
        {...{
          style: {
            width: table.getCenterTotalSize(),
          },
        }}
      >
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  colSpan={header.colSpan}
                  style={{ width: header.getSize() }}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                  <div
                    {...{
                      onDoubleClick: () => header.column.resetSize(),
                      onMouseDown: header.getResizeHandler(),
                      className: `resizer ${header.column.getIsResizing() ? 'isResizing' : ''}`,
                    }}
                  ></div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              onClick={() => row.toggleSelected()}
              className={row.getIsSelected() ? 'selected' : ''}
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} style={{ width: cell.column.getSize() }}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  padding: 10px;

  table {
    width: 100%;
  }

  table thead th {
    position: relative;

    .resizer {
      position: absolute;
      top: 0%;
      right: 0;
      width: 5px;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      opacity: 0;
      cursor: col-resize;

      &.isResizing {
        background-color: blue;
      }
    }

    &:hover {
      .resizer {
        opacity: 1;
      }
    }
  }

  table th,
  table td {
    padding: 4px;
    border: 1px solid #ccc;
    text-align: center;
  }

  table tbody tr {
    &.selected {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
`;
