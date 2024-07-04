import { useState } from "react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const TodoFilter = () => {
  const [priority, setPriority] = useState("high");
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="text-xl font-semibold bg-primary-gradient">
            Filter
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel className="text-center">
            Filter by Priority
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={priority} onValueChange={setPriority}>
            <DropdownMenuRadioItem value="high">High</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="medium">Medium</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="low">Low</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default TodoFilter;
