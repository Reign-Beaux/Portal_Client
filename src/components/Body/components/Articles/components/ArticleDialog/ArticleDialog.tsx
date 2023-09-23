import { CustomButtonIcon, CustomDialog, CustomLink } from "common/components";
import { CustomDialogBody, CustomDialogTitle } from "dialog/components";
import React from "react";
import { useArticleContext } from "../../context";

export interface ArticleDialogProps {}

const ArticleDialog: React.FC<ArticleDialogProps> = ({}) => {
  const { isOpenDialog, setIsOpenDialog, articleSelected } = useArticleContext();

  return (
    <CustomDialog open={isOpenDialog}>
      <CustomDialogTitle>
        <h3>{articleSelected.title}</h3>
        <CustomButtonIcon onClick={() => setIsOpenDialog(false)}>
          <i className="fa-solid fa-xmark"></i>
        </CustomButtonIcon>
      </CustomDialogTitle>
      <CustomDialogBody>
        {articleSelected.body}
        <br />
        <br />
        <div style={{ textAlign: "end" }}>
          <CustomLink href={articleSelected.url}>Artículo de origen</CustomLink>
        </div>
      </CustomDialogBody>
    </CustomDialog>
  );
};

export default ArticleDialog;
