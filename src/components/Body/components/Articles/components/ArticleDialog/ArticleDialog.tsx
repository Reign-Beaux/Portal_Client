import { CustomButtonIcon, CustomDialog } from "common/components";
import { CustomDialogTitle } from "dialog/components";
import React from "react";
import { useArticleContext } from "../../context";

export interface ArticleDialogProps {}

const ArticleDialog: React.FC<ArticleDialogProps> = ({}) => {
  const { isOpenDialog, setIsOpenDialog, articleSelected } = useArticleContext();

  return (
    <CustomDialog open={isOpenDialog}>
      <CustomDialogTitle>
        <h3>{articleSelected}</h3>
        <CustomButtonIcon onClick={() => setIsOpenDialog(false)}>
          <i className="fa-solid fa-xmark"></i>
        </CustomButtonIcon>
      </CustomDialogTitle>			
    </CustomDialog>
  );
};

export default ArticleDialog;
