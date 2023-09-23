import { CustomDialog } from 'common/components';
import React from 'react';

export interface ArticleDialogProps {
}

const ArticleDialog: React.FC<ArticleDialogProps>  = ({}) => {
	return <CustomDialog open={false}>Holi</CustomDialog>;
};

export default ArticleDialog;
