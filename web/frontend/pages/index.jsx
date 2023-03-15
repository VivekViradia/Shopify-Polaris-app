import { Card, Page, Layout, Stack , Select, Button, ButtonGroup} from "@shopify/polaris";
import { useState, useCallback,  } from "react";
import CustomSidebar from "../components/CustomSidebar";
import SectionStepOne from "../components/SectionStepOne";


export default function Home() {
  return (
    <Page fullWidth >
      <Stack wrap={false}>
        <Stack.Item>
          <CustomSidebar/>
          </Stack.Item>

        <Stack.Item fill>
          <Layout>


            <Layout.Section>
           </Layout.Section>

            <Layout.Section>
              <h1 style={{fontWeight: "bold"}}>STEP 1: SELECT WHAT PRODUCTS TO EDIT</h1>
              <br/>
            </Layout.Section>
             
            <Layout.Section>
              <SectionStepOne />
            </Layout.Section>


            <Layout.Section>
              <hr/>
            </Layout.Section>

            <Layout.Section>
             <h1 style={{fontWeight: "bold"}}>STEP 2: PREVIEW SELECTED PRODUCTS</h1>
              <br/> 
            </Layout.Section>
            <Layout.Section>
              <Card>
                <Layout>
                  <Layout.Section>
                  <Stack distribution="fillEvenly">
                  <Stack.Item></Stack.Item>                
                  <Stack.Item>
                     Title
                  </Stack.Item>
                  <Stack.Item>
                     Variants
                  </Stack.Item>
                  <Stack.Item>
                     Tags
                  </Stack.Item>
                </Stack>

                  </Layout.Section>
                  <Layout.Section>

                  </Layout.Section>
                </Layout> 
              </Card>
            </Layout.Section>

            <Layout.Section>
              <hr/>
            </Layout.Section>
            
            <Layout.Section>
             <h1 style={{fontWeight: "bold"}}>OPTIONAL STEP: SELECT WHAT VARIANTS TO EDIT</h1>
              <br/> 
            </Layout.Section>
            <Layout.Section>
              <Card>
                <Layout>
                  <Layout.Section>
                    <Stack>
                      <Stack.Item>
                      </Stack.Item>
                      <Stack.Item>
                        Variants must match all following conditions:
                      </Stack.Item>
                    </Stack>
                  </Layout.Section>
                  <Layout.Section>
                    <Stack distribution="fill">
                    
                    <Stack.Item ><Select /></Stack.Item>
                    <Stack.Item></Stack.Item>
                    </Stack>
                  </Layout.Section>
                  <Layout.Section>
                    <Stack distribution="fill">
                    
                    <Stack.Item ><Select /></Stack.Item>
                    <Stack.Item></Stack.Item>
                    </Stack>
                  </Layout.Section>
                  <Layout.Section>

                  </Layout.Section>

                </Layout>
              </Card>
            </Layout.Section>

            <Layout.Section>
              <hr/>
            </Layout.Section>
            
            <Layout.Section>
             <h1 style={{fontWeight: "bold"}}>STEP 3: CHOOSE HOW TO EDIT SELECTED PRODUCTS</h1>
              <br/> 
            </Layout.Section>
            <Layout.Section>
              <Card>
                <Layout>
                  <Layout.Section>
                    <Stack>
                      <Stack.Item></Stack.Item>
                      <Stack.Item>
                      <h2>Choose an option:</h2>
                      </Stack.Item>
                    </Stack>
                  </Layout.Section>
                  <Layout.Section>
                  <Stack>
                  <Stack.Item>
                  </Stack.Item>
                  <Stack.Item>
                  <Select
                   
                    />
                  </Stack.Item>
                  <Stack.Item>
                  <Select
                   
                    />
                  </Stack.Item>
                  <Stack.Item >
                  <Select
                    />
                  </Stack.Item>
                 </Stack>
                  </Layout.Section>
                  <Layout.Section>
                    <ButtonGroup>
                     <h1></h1>
                     <h1></h1>
                     <Button >Schedule Bulk Edit</Button>
                     <Button primary>Start Bulk Edit Now</Button>
                      </ButtonGroup>
                    </Layout.Section>
                  <Layout.Section></Layout.Section>
                </Layout>
              </Card>
            </Layout.Section>

          </Layout>
        </Stack.Item>
      </Stack> 
    </Page>
  );
}