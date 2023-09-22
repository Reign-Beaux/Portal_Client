import { useAppContext } from "@/context";
import { CustomList } from "common/components";
import { List } from "common/components/CustomList/CustomList";
import { Endpoints } from "common/static";
import { useAxios } from "libraries/axios";
import React, { useEffect, useState } from "react";

export interface ReferenceSitesProps {}

const ReferenceSites: React.FC<ReferenceSitesProps> = ({}) => {
  const { setIdTheme, setThemeSelected } = useAppContext();
  const { getAll } = useAxios();
  const [referenceSites, setReferenceSites] = useState<List[]>([]);

  const getReferenceSites = async () => {
    let response = await getAll<List>({ endpoint: Endpoints.REFERENCE_SITES });
    setReferenceSites(response);
  };

  const handleShowList = (id: number) => {
    let newValue = [...referenceSites];
    newValue.forEach((value) => {
      if (value.id === id) {
        value.isExpanded = !value.isExpanded;
      }
    });

    setReferenceSites([...newValue]);
  };

  const handleDataSelect = (id: number, dataSelect: string) => {
    setThemeSelected(dataSelect);
    let newValue = [...referenceSites];
    newValue.forEach((value) => {
      value.isExpanded = false;
    });

    setIdTheme(id);
    setReferenceSites([...newValue]);
  };

  useEffect(() => {
    getReferenceSites();
  }, []);

  return (
    <div style={{ maxWidth: "calc(100% - 300px)", display: "flex", flexDirection: "row" }}>
      {referenceSites.map((site) => (
        <CustomList
          key={site.id}
          props={site}
          handleShowList={handleShowList}
          handleDataSelect={handleDataSelect}
        />
      ))}
    </div>
  );
};

export default ReferenceSites;
