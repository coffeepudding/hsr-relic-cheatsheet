"use client";

import React, { useEffect, useRef } from 'react';
import { ReactTabulator } from 'react-tabulator';
import 'react-tabulator/lib/styles.css';
import 'react-tabulator/lib/css/tabulator.min.css';

const CharacterTable = () => {
  const tableRef = useRef(null);

  const data = [
    {"name":"開拓者(壊滅)","path":"壊滅","type":"物理","id":1},
    {"name":"三月なのか","path":"存護","type":"氷","id":2},
    {"name":"丹恒","path":"巡狩","type":"風","id":3},
    {"name":"姫子","path":"知恵","type":"炎","id":4},
    {"name":"ヴェルト","path":"虚無","type":"虚数","id":5}
  ];

  const columns = [
    { title: "名前", field: "name", width: 150 },
    { title: "パス", field: "path", width: 100 },
    { title: "タイプ", field: "type", width: 100 },
    { title: "ID", field: "id", width: 50 }
  ];

  const options = {
    layout: "fitColumns",
    responsiveLayout: "hide",
    pagination: "local",
    paginationSize: 10,
  };

  useEffect(() => {
    if (tableRef.current) {
      tableRef.current.on('tableBuilt', function() {
        tableRef.current.setData(data);
      });
    }
  }, []);

  return (
    <ReactTabulator
      ref={tableRef}
      columns={columns}
      data={data}
      options={options}
    />
  );
};

export default CharacterTable;
