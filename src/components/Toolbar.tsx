export const Toolbar = () => {
  const isApple = typeof navigator !== 'undefined' && /Mac OS X/.test(navigator.userAgent)

  return (
    <div className="menu" editor-component="menu">
      <div className="menu-item">
        <div className="menu-item__undo" title={`Undo (${isApple ? '⌘' : 'Ctrl'}+Z)`}><i></i></div>
        <div className="menu-item__redo" title={`Redo (${isApple ? '⌘' : 'Ctrl'}+Y)`}><i></i></div>
        <div className="menu-item__painter" title="Format Painter (double-click for continuous use)"><i></i></div>
        <div className="menu-item__format" title="Clear Formatting"><i></i></div>
      </div>
      <div className="menu-divider"></div>
      <div className="menu-item">
        <div className="menu-item__font">
          <span className="select" title="Font">Arial</span>
          <div className="options">
            <ul>
              <li data-family="Arial" style={{fontFamily:'Arial'}}>Arial</li>
              <li data-family="Segoe UI" style={{fontFamily:'Segoe UI'}}>Segoe UI</li>
              <li data-family="Times New Roman" style={{fontFamily:'Times New Roman'}}>Times New Roman</li>
              <li data-family="Georgia" style={{fontFamily:'Georgia'}}>Georgia</li>
              <li data-family="Calibri" style={{fontFamily:'Calibri'}}>Calibri</li>
              <li data-family="Verdana" style={{fontFamily:'Verdana'}}>Verdana</li>
              <li data-family="Helvetica" style={{fontFamily:'Helvetica'}}>Helvetica</li>
              <li data-family="Trebuchet MS" style={{fontFamily:'Trebuchet MS'}}>Trebuchet MS</li>
              <li data-family="Tahoma" style={{fontFamily:'Tahoma'}}>Tahoma</li>
              <li data-family="Courier New" style={{fontFamily:'Courier New'}}>Courier New</li>
              <li data-family="Garamond" style={{fontFamily:'Garamond'}}>Garamond</li>
              <li data-family="Palatino" style={{fontFamily:'Palatino'}}>Palatino</li>
              <li data-family="Comic Sans MS" style={{fontFamily:'Comic Sans MS'}}>Comic Sans MS</li>
              <li data-family="Impact" style={{fontFamily:'Impact'}}>Impact</li>
              <li data-family="Ink Free" style={{fontFamily:'Ink Free'}}>Ink Free</li>
              <li data-family="Fantasy" style={{fontFamily:'Fantasy'}}>Fantasy</li>
            </ul>
          </div>
        </div>
        <div className="menu-item__size">
          <span className="select" title="Font Size">12</span>
          <div className="options">
            <ul>
              <li data-size="56">56</li>
              <li data-size="48">48</li>
              <li data-size="36">36</li>
              <li data-size="32">32</li>
              <li data-size="28">28</li>
              <li data-size="24">24</li>
              <li data-size="22">22</li>
              <li data-size="20">20</li>
              <li data-size="18">18</li>
              <li data-size="16">16</li>
              <li data-size="14">14</li>
              <li data-size="12">12</li>
              <li data-size="10">10</li>
              <li data-size="9">9</li>
              <li data-size="8">8</li>
              <li data-size="6">6</li>
            </ul>
          </div>
        </div>
        <div className="menu-item__size-add"><i></i></div>
        <div className="menu-item__size-minus"><i></i></div>
        <div className="menu-item__bold"><i></i></div>
        <div className="menu-item__italic"><i></i></div>
        <div className="menu-item__underline">
          <i></i>
          <span className="select"></span>
          <div className="options">
            <ul>
              <li data-decoration-style='solid'><i></i></li>
              <li data-decoration-style='double'><i></i></li>
              <li data-decoration-style='dashed'><i></i></li>
              <li data-decoration-style='dotted'><i></i></li>
              <li data-decoration-style='wavy'><i></i></li>
            </ul>
          </div>
        </div>
        <div className="menu-item__strikeout" title="Strikethrough (Ctrl+Shift+X)"><i></i></div>
        <div className="menu-item__superscript"><i></i></div>
        <div className="menu-item__subscript"><i></i></div>
        <div className="menu-item__color" title="Font Color">
          <i></i>
          <span></span>
          <input type="color" id="color" />
        </div>
        <div className="menu-item__highlight" title="Highlight">
          <i></i>
          <span></span>
          <input type="color" id="highlight" />
        </div>
      </div>
      <div className="menu-divider"></div>
      <div className="menu-item">
        <div className="menu-item__title">
          <i></i>
          <span className="select" title="Toggle Heading">Body</span>
          <div className="options">
            <ul>
              <li style={{fontSize:'16px'}}>Body</li>
              <li data-level="first" style={{fontSize:'26px'}}>Heading 1</li>
              <li data-level="second" style={{fontSize:'24px'}}>Heading 2</li>
              <li data-level="third" style={{fontSize:'22px'}}>Heading 3</li>
              <li data-level="fourth" style={{fontSize:'20px'}}>Heading 4</li>
              <li data-level="fifth" style={{fontSize:'18px'}}>Heading 5</li>
              <li data-level="sixth" style={{fontSize:'16px'}}>Heading 6</li>
            </ul>
          </div>
        </div>
        <div className="menu-item__left"><i></i></div>
        <div className="menu-item__center"><i></i></div>
        <div className="menu-item__right"><i></i></div>
        <div className="menu-item__alignment"><i></i></div>
        <div className="menu-item__justify"><i></i></div>
        <div className="menu-item__row-margin">
          <i title="Line Spacing"></i>
          <div className="options">
            <ul>
              <li data-rowmargin='1'>1</li>
              <li data-rowmargin="1.25">1.25</li>
              <li data-rowmargin="1.5">1.5</li>
              <li data-rowmargin="1.75">1.75</li>
              <li data-rowmargin="2">2</li>
              <li data-rowmargin="2.5">2.5</li>
              <li data-rowmargin="3">3</li>
            </ul>
          </div>
        </div>
        <div className="menu-item__list">
          <i></i>
          <div className="options">
            <ul>
              <li><label>Remove List</label></li>
              <li data-list-type="ol" data-list-style='decimal'>
                <label>Ordered List:</label>
                <ol><li>________</li></ol>
              </li>
              <li data-list-type="ul" data-list-style='checkbox'>
                <label>Checkbox List:</label>
                <ul style={{listStyleType: '☑️ '}}><li>________</li></ul>
              </li>
              <li data-list-type="ul" data-list-style='disc'>
                <label>Disc Bullet List:</label>
                <ul style={{listStyleType: 'disc'}}><li>________</li></ul>
              </li>
              <li data-list-type="ul" data-list-style='circle'>
                <label>Circle Bullet List:</label>
                <ul style={{listStyleType: 'circle'}}><li>________</li></ul>
              </li>
              <li data-list-type="ul" data-list-style='square'>
                <label>Square Bullet List:</label>
                <ul style={{listStyleType: '☐ '}}><li>________</li></ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="menu-divider"></div>
      <div className="menu-item">
        <div className="menu-item__table"><i title="Table"></i></div>
        <div className="menu-item__table__collapse">
          <div className="table-close">×</div>
          <div className="table-title">
            <span className="table-select">Insert</span>
            <span>Table</span>
          </div>
          <div className="table-panel"></div>
        </div>
        <div className="menu-item__image">
          <i title="Image"></i>
          <input type="file" id="image" accept=".png, .jpg, .jpeg, .svg, .gif" />
        </div>
        <div className="menu-item__hyperlink"><i title="Hyperlink"></i></div>
        <div className="menu-item__separator">
          <i title="Separator"></i>
          <div className="options">
            <ul>
              <li data-separator='0,0'><i></i></li>
              <li data-separator="1,1"><i></i></li>
              <li data-separator="3,1"><i></i></li>
              <li data-separator="4,4"><i></i></li>
              <li data-separator="7,3,3,3"><i></i></li>
              <li data-separator="6,2,2,2,2,2"><i></i></li>
            </ul>
          </div>
        </div>
        <div className="menu-item__watermark">
          <i title="Watermark"></i>
          <div className="options">
            <ul>
              <li data-menu="add">Add Watermark</li>
              <li data-menu="delete">Remove Watermark</li>
            </ul>
          </div>
        </div>
        <div className="menu-item__codeblock" title="Code Block"><i></i></div>
        <div className="menu-item__page-break" title="Page Break"><i></i></div>
        <div className="menu-item__control">
          <i title="Control"></i>
          <div className="options">
            <ul>
              <li data-control='text'>Text</li>
              <li data-control="number">Number</li>
              <li data-control="select">Select</li>
              <li data-control="date">Date</li>
              <li data-control="checkbox">Checkbox</li>
              <li data-control="radio">Radio</li>
            </ul>
          </div>
        </div>
        <div className="menu-item__checkbox" title="Checkbox"><i></i></div>
        <div className="menu-item__radio" title="Radio Button"><i></i></div>
        <div className="menu-item__latex" title="LateX"><i></i></div>
        <div className="menu-item__date">
          <i title="Date"></i>
          <div className="options">
            <ul>
              <li data-format="yyyy-MM-dd"></li>
              <li data-format="yyyy-MM-dd hh:mm:ss"></li>
            </ul>
          </div>
        </div>
        <div className="menu-item__block" title="Content Block"><i></i></div>
      </div>
      <div className="menu-divider"></div>
      <div className="menu-item">
        <div className="menu-item__search" data-menu="search"><i></i></div>
        <div className="menu-item__search__collapse" data-menu="search">
          <div className="menu-item__search__collapse__search">
            <input type="text" />
            <label className="search-result"></label>
            <div className="arrow-left"><i></i></div>
            <div className="arrow-right"><i></i></div>
            <span>×</span>
          </div>
          <div className="menu-item__search__collapse__replace">
            <input type="text" />
            <button>Replace</button>
          </div>
          <div className="menu-item__search__collapse__option">
            <div className="search-option-item">
              <input type="checkbox" id="option-reg" defaultChecked />
              <label htmlFor="option-reg">Regex</label>
            </div>
            <div className="search-option-item">
              <input type="checkbox" id="option-case" defaultChecked />
              <label htmlFor="option-case">Ignore Case</label>
            </div>
            <div className="search-option-item">
              <input type="checkbox" id="option-selection" />
              <label htmlFor="option-selection">Find in Selection</label>
            </div>
          </div>
        </div>
        <div className="menu-item__print" data-menu="print"><i></i></div>
      </div>
    </div>
  )
}
