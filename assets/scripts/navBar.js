var isNavMenuOpen = false;

function clickNavMenuButton()
{
	isNavMenuOpen = !isNavMenuOpen;
	var _navBar = document.getElementById("navBar");
	if (isNavMenuOpen)
	{
		_navBar.classList.add("navMenuOpen");
	}
	else
	{
		_navBar.classList.remove("navMenuOpen");
	}
}
