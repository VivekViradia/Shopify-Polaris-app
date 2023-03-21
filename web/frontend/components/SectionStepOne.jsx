import React, { useEffect } from "react";
import {
  Card,
  Layout,
  Stack,
  Select,
  Button,
  ButtonGroup,
  IndexTable,
  useIndexResourceState,
} from "@shopify/polaris";
import { useState, useCallback } from "react";
import { useAppQuery, useAuthenticatedFetch } from "../hooks";

const SectionStepOne = () => {
  const [selected, setSelected] = useState("today");
  const [selected2, setSelected2] = useState("is");
  const [selected3, setSelected3] = useState("");
  const [loading, setIsLoading] = useState(false);

  const fetch = useAuthenticatedFetch();

  const handleSelectChange = useCallback((value) => setSelected(value), []);
  const handleSelectChange2 = useCallback((value) => setSelected2(value), []);

  const options = [
    { label: "Collections", value: "today" },
    { label: "Yesterday", value: "yesterday" },
    { label: "Last 7 days", value: "lastWeek" },
  ];

  const condition = [
    { label: "is", value: "is" },
    { label: "is not", value: "is not" },
  ];


  // Final Code for Product (Line: 38-47)
  // const { data, isLoading: isLoadingTrue } = useAppQuery({
  //   url: "/api/products",
  //   reactQueryOptions: {
  //     onSuccess: () => {
  //       setIsLoading(true);
  //     },
  //   },
  // });
  // console.log("Data123", data);

  // Code for console log whole data of collections(Line: 49-58)
  // const { data, isLoading: isLoadingTrue } = useAppQuery({
  //   url: "/api/collections",
  //   reactQueryOptions: {
  //     onSuccess: () => {
  //       setIsLoading(true);
  //     },
  //   },
  // });
  // console.log("Data123", data);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/products");
      const data = await response.json();
      console.log("Data44444", data);
    } catch (err) {
      console.log("Error", err);
    }
  };

  useEffect(() => {
   
    fetchData();
  }, []);

  const { selectedResources } = useIndexResourceState(data);
  console.log("DATA!!!!!!!!!", data);

  const rowMark = (id, title, handle, vendor, index) => {
      return <IndexTable.Row
        key={id}
        id={id}
        position={index}
        selected={selectedResources.includes(id)}
      >
        <IndexTable.Cell>{title}</IndexTable.Cell>
        <IndexTable.Cell>{handle}</IndexTable.Cell>
        <IndexTable.Cell>{vendor}</IndexTable.Cell>
      </IndexTable.Row>
  };

  return (
    <Card>
      <Layout>
        <Layout.Section>
          <Stack>
            <Stack.Item></Stack.Item>
            <Stack.Item>
              <h2>Products must match all conditions</h2>
            </Stack.Item>
          </Stack>
        </Layout.Section>
        <Layout.Section>
          <Stack>
            <Stack.Item></Stack.Item>
            <Stack.Item>
              <Select
                options={options}
                onChange={handleSelectChange}
                value={selected}
              />
            </Stack.Item>
            <Stack.Item>
              <Select
                options={condition}
                onChange={handleSelectChange2}
                value={selected2}
              />
            </Stack.Item>
            <Stack.Item>
              <Select />
            </Stack.Item>
          </Stack>
        </Layout.Section>
        <Layout.Section>
          <ButtonGroup>
            <h1></h1>
            <h1></h1>
            <Button>Preview matched products</Button>
            <Button primary>Add product filter condition</Button>
          </ButtonGroup>
        </Layout.Section>
        <Layout.Section>
          <Card>
            {
               data && data.length && <IndexTable
               itemCount={data.length}
               headings={[
                 { title: "Title" },
                 { title: "Handle" },                 
                 { title: "Vender" },
               ]}
             >
               {
                data.map(({ id, title, handle, vendor }, index) => rowMark(id, title, handle, vendor ,index))
               }
             </IndexTable>
            }
           
          </Card>
        </Layout.Section>
        <Layout.Section></Layout.Section>
      </Layout>
    </Card>
  );
};

export default SectionStepOne;
