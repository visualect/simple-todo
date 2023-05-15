export interface ITodoItem {
    id: string;
    title: string;
    completed: boolean;
}

export interface ITodoItemInteractions {
    removeItem: (id: string) => void;
    toggleItem: (id: string) => void;
}

export interface ITodoFormProps {
    addItem: (newItem: ITodoItem) => void;
}

export interface ITodoListProps extends ITodoItemInteractions {
    todos: ITodoItem[]
}

export interface ITodoItemProps extends ITodoItemInteractions {
    item: ITodoItem
}

export interface IButtonProps {
    children: React.ReactNode;
    onClick?: () => void
    main?: 1 | 0;
}