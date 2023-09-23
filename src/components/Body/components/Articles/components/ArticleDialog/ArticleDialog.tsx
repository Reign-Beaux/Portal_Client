import { CustomDialog } from 'common/components';
import React from 'react';
import { useArticleContext } from '../../context';

export interface ArticleDialogProps {
}

const ArticleDialog: React.FC<ArticleDialogProps>  = ({}) => {
	const { isOpenDialog } = useArticleContext();

	return <CustomDialog open={isOpenDialog}>Holi</CustomDialog>;
};

export default ArticleDialog;
