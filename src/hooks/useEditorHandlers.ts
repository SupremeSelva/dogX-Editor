import { useEffect } from 'react'

export const useEditorHandlers = (editorInstance: any) => {
  useEffect(() => {
    if (!editorInstance) return

    const instance = editorInstance

    // Undo/Redo handlers
    const undoDom = document.querySelector<HTMLDivElement>('.menu-item__undo')
    if (undoDom) {
      undoDom.onclick = () => instance.command.executeUndo()
    }

    const redoDom = document.querySelector<HTMLDivElement>('.menu-item__redo')
    if (redoDom) {
      redoDom.onclick = () => instance.command.executeRedo()
    }

    // Format Painter
    const painterDom = document.querySelector<HTMLDivElement>('.menu-item__painter')
    if (painterDom) {
      let isFirstClick = true
      let painterTimeout: number
      painterDom.onclick = () => {
        if (isFirstClick) {
          isFirstClick = false
          painterTimeout = window.setTimeout(() => {
            isFirstClick = true
            instance.command.executePainter({ isDblclick: false })
          }, 200)
        } else {
          window.clearTimeout(painterTimeout)
        }
      }
      painterDom.ondblclick = () => {
        isFirstClick = true
        window.clearTimeout(painterTimeout)
        instance.command.executePainter({ isDblclick: true })
      }
    }

    // Clear Format
    const formatDom = document.querySelector<HTMLDivElement>('.menu-item__format')
    if (formatDom) {
      formatDom.onclick = () => instance.command.executeFormat()
    }

    // Font selector
    const fontDom = document.querySelector<HTMLDivElement>('.menu-item__font')
    const fontOptionDom = fontDom?.querySelector<HTMLDivElement>('.options')
    if (fontDom && fontOptionDom) {
      fontDom.onclick = () => fontOptionDom.classList.toggle('visible')
      fontOptionDom.onclick = (evt) => {
        const li = evt.target as HTMLLIElement
        if (li.dataset.family) {
          instance.command.executeFont(li.dataset.family)
        }
      }
    }

    // Size selector
    const sizeSetDom = document.querySelector<HTMLDivElement>('.menu-item__size')
    const sizeOptionDom = sizeSetDom?.querySelector<HTMLDivElement>('.options')
    if (sizeSetDom && sizeOptionDom) {
      sizeSetDom.onclick = () => sizeOptionDom.classList.toggle('visible')
      sizeOptionDom.onclick = (evt) => {
        const li = evt.target as HTMLLIElement
        if (li.dataset.size) {
          instance.command.executeSize(Number(li.dataset.size))
        }
      }
    }

    // Size increase/decrease
    const sizeAddDom = document.querySelector<HTMLDivElement>('.menu-item__size-add')
    if (sizeAddDom) {
      sizeAddDom.onclick = () => instance.command.executeSizeAdd()
    }

    const sizeMinusDom = document.querySelector<HTMLDivElement>('.menu-item__size-minus')
    if (sizeMinusDom) {
      sizeMinusDom.onclick = () => instance.command.executeSizeMinus()
    }

    // Bold, Italic, Strikeout
    const boldDom = document.querySelector<HTMLDivElement>('.menu-item__bold')
    if (boldDom) {
      boldDom.onclick = () => instance.command.executeBold()
    }

    const italicDom = document.querySelector<HTMLDivElement>('.menu-item__italic')
    if (italicDom) {
      italicDom.onclick = () => instance.command.executeItalic()
    }

    const strikeoutDom = document.querySelector<HTMLDivElement>('.menu-item__strikeout')
    if (strikeoutDom) {
      strikeoutDom.onclick = () => instance.command.executeStrikeout()
    }

    // Underline with styles
    const underlineDom = document.querySelector<HTMLDivElement>('.menu-item__underline')
    const underlineOptionDom = underlineDom?.querySelector<HTMLDivElement>('.options')
    if (underlineDom && underlineOptionDom) {
      const underlineIcon = underlineDom.querySelector<HTMLElement>('i')
      const underlineSelect = underlineDom.querySelector<HTMLSpanElement>('.select')
      
      if (underlineSelect) {
        underlineSelect.onclick = () => underlineOptionDom.classList.toggle('visible')
      }
      if (underlineIcon) {
        underlineIcon.onclick = () => {
          instance.command.executeUnderline()
          underlineOptionDom.classList.remove('visible')
        }
      }
      
      const underlineUl = underlineDom.querySelector<HTMLUListElement>('ul')
      if (underlineUl) {
        underlineUl.onmousedown = (evt) => {
          const li = evt.target as HTMLLIElement
          if (li.dataset.decorationStyle) {
            instance.command.executeUnderline({ style: li.dataset.decorationStyle })
            underlineOptionDom.classList.remove('visible')
          }
        }
      }
    }

    // Superscript/Subscript
    const superscriptDom = document.querySelector<HTMLDivElement>('.menu-item__superscript')
    if (superscriptDom) {
      superscriptDom.onclick = () => instance.command.executeSuperscript()
    }

    const subscriptDom = document.querySelector<HTMLDivElement>('.menu-item__subscript')
    if (subscriptDom) {
      subscriptDom.onclick = () => instance.command.executeSubscript()
    }

    // Color pickers
    const colorControlDom = document.querySelector<HTMLInputElement>('#color')
    const colorDom = document.querySelector<HTMLDivElement>('.menu-item__color')
    if (colorControlDom && colorDom) {
      colorControlDom.oninput = () => instance.command.executeColor(colorControlDom.value)
      colorDom.onclick = () => colorControlDom.click()
    }

    const highlightControlDom = document.querySelector<HTMLInputElement>('#highlight')
    const highlightDom = document.querySelector<HTMLDivElement>('.menu-item__highlight')
    if (highlightControlDom && highlightDom) {
      highlightControlDom.oninput = () => instance.command.executeHighlight(highlightControlDom.value)
      highlightDom.onclick = () => highlightControlDom.click()
    }

    // Title/Heading selector
    const titleDom = document.querySelector<HTMLDivElement>('.menu-item__title')
    const titleOptionDom = titleDom?.querySelector<HTMLDivElement>('.options')
    if (titleDom && titleOptionDom) {
      titleDom.onclick = () => titleOptionDom.classList.toggle('visible')
      titleOptionDom.onclick = (evt) => {
        const li = evt.target as HTMLLIElement
        const level = li.dataset.level || null
        instance.command.executeTitle(level)
      }
    }

    // Alignment buttons
    const leftDom = document.querySelector<HTMLDivElement>('.menu-item__left')
    if (leftDom) leftDom.onclick = () => instance.command.executeRowFlex('left')

    const centerDom = document.querySelector<HTMLDivElement>('.menu-item__center')
    if (centerDom) centerDom.onclick = () => instance.command.executeRowFlex('center')

    const rightDom = document.querySelector<HTMLDivElement>('.menu-item__right')
    if (rightDom) rightDom.onclick = () => instance.command.executeRowFlex('right')

    const alignmentDom = document.querySelector<HTMLDivElement>('.menu-item__alignment')
    if (alignmentDom) alignmentDom.onclick = () => instance.command.executeRowFlex('alignment')

    const justifyDom = document.querySelector<HTMLDivElement>('.menu-item__justify')
    if (justifyDom) justifyDom.onclick = () => instance.command.executeRowFlex('justify')

    // Line spacing
    const rowMarginDom = document.querySelector<HTMLDivElement>('.menu-item__row-margin')
    const rowOptionDom = rowMarginDom?.querySelector<HTMLDivElement>('.options')
    if (rowMarginDom && rowOptionDom) {
      rowMarginDom.onclick = () => rowOptionDom.classList.toggle('visible')
      rowOptionDom.onclick = (evt) => {
        const li = evt.target as HTMLLIElement
        if (li.dataset.rowmargin) {
          instance.command.executeRowMargin(Number(li.dataset.rowmargin))
        }
      }
    }

    // List selector
    const listDom = document.querySelector<HTMLDivElement>('.menu-item__list')
    const listOptionDom = listDom?.querySelector<HTMLDivElement>('.options')
    if (listDom && listOptionDom) {
      listDom.onclick = () => listOptionDom.classList.toggle('visible')
      listOptionDom.onclick = (evt) => {
        const li = evt.target as HTMLLIElement
        const listType = li.dataset.listType || null
        const listStyle = li.dataset.listStyle
        instance.command.executeList(listType, listStyle)
      }
    }

    // Image upload
    const imageInputDom = document.querySelector<HTMLInputElement>('#image')
    const imageDom = document.querySelector<HTMLDivElement>('.menu-item__image')
    if (imageInputDom && imageDom) {
      imageDom.onclick = () => imageInputDom.click()
      imageInputDom.onchange = () => {
        const file = imageInputDom.files?.[0]
        if (file) {
          const reader = new FileReader()
          reader.onload = (evt) => {
            const base64 = evt.target?.result as string
            instance.command.executeImage({ value: base64 })
          }
          reader.readAsDataURL(file)
        }
      }
    }

    // Hyperlink
    const hyperlinkDom = document.querySelector<HTMLDivElement>('.menu-item__hyperlink')
    if (hyperlinkDom) {
      hyperlinkDom.onclick = () => {
        const url = prompt('Enter URL:')
        if (url) {
          instance.command.executeHyperlink({ type: 'link', url })
        }
      }
    }

    // Page break
    const pageBreakDom = document.querySelector<HTMLDivElement>('.menu-item__page-break')
    if (pageBreakDom) {
      pageBreakDom.onclick = () => instance.command.executePageBreak()
    }

    // Print
    const printDom = document.querySelector<HTMLDivElement>('.menu-item__print')
    if (printDom) {
      printDom.onclick = () => instance.command.executePrint()
    }

    // Close dropdowns on outside click
    window.addEventListener('click', (evt) => {
      const visibleDom = document.querySelector('.visible')
      if (!visibleDom || visibleDom.contains(evt.target as Node)) return
      visibleDom.classList.remove('visible')
    }, { capture: true })

  }, [editorInstance])
}
