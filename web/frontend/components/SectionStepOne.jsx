import React, { useEffect } from "react";
import {
  Card,
  Page,
  Layout,
  Stack,
  Select,
  Button,
  ButtonGroup,
  IndexTable,
  useIndexResourceState,
} from "@shopify/polaris";
import { useState, useCallback } from "react";
import { useAuthenticatedFetch } from "../hooks/useAuthenticatedFetch";
    

const SectionStepOne = () => {
  const fetch = useAuthenticatedFetch();

  const [selected, setSelected] = useState("today");
  const [selected2, setSelected2] = useState("is");
  const [selected3, setSelected3] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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

  const fetchData = async () => {
    try {
      const response = await fetch("/api/products")
      console.log("Data",await response.json())
    } catch(err) {
      console.log('Error',err)
  }
}

fetchData()
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
    
        </Layout.Section>
        <Layout.Section></Layout.Section>
      </Layout>
    </Card>
  );
};

export default SectionStepOne;
