import { beautifyDate } from '../../../functions/dates';
import { MenuDetail, Menu, GroupedDetails } from './menu-types';

interface MenuComponentProps {
  menu: Menu;
}

const MenuComponent = ({ menu }: MenuComponentProps) => {
  const groupDetails = (details: MenuDetail[]) => {
    const groupedDetails: GroupedDetails[] = [];
    details.forEach((detail) => {
      const index = groupedDetails.findIndex(
        (groupedDetail) => groupedDetail.meal_type === detail.meal_type
      );
      if (index === -1) {
        groupedDetails.push({
          meal_type: detail.meal_type,
          details: [detail],
        });
      } else {
        groupedDetails[index].details.push(detail);
      }
    });
    return groupedDetails;
  };

  const groupedDetails = groupDetails(menu.menu_details);

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-8 py-3 mt-0 mb-8 lg:px-4 bg-white w-full rounded-lg shadow-md h-20">
      <div className="flex flex-col w-full items-start">
        <span className="text-sm font-semibold">{menu.username}</span>
        <span className="text-xs text-gray-500">
          {beautifyDate(menu.created_at)}
        </span>
      </div>

      <div className="flex flex-col ww-full items-center mt-5 ">
        <span className="text-2xl font-serif">{menu.title}</span>
        <span className="text-xs text-gray-500">{menu.subtitle}</span>
      </div>

      <div className="flex flex-col w-full mt-3">
        {groupedDetails.map((menu_detail: any) => {
          return (
            <div className="flex flex-col w-full mt-5 mb-3">
              <span className="text-xl mb-3 font-thin">
                {menu_detail.meal_type}
              </span>
              {menu_detail.details.map((detail: any) => {
                return (
                  <div className="flex flex-row justify-between mb-1 border-b-2">
                    <span className="text-sm font-serif italic">
                      {detail.name}
                    </span>
                    <span className="text-sm">{detail.price}</span>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuComponent;
