import React, { useState } from 'react';
import { Filter } from '../components';
import './FilterDialog.css';

function FilterDialog(props) {
  const [additionalFilter, setAdditionalFilter] = useState({
    fieldName: '',
    expression: '',
    fieldValue: ''
  });
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelect = (option) => {
    setSelectedOption(option);
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdditionalFilter((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fieldName, expression, fieldValue } = additionalFilter;
    let f = [...props.filters];
    f.push(
      <Filter
        fieldName={selectedOption}
        expression={expression}
        fieldValue={fieldValue}
      />
    );
    props.setFilters(f);
    props.handleClose();
  };
  const fields = ['納品日', '得意先', '商品名'];
  return (
    <form onSubmit={handleSubmit}>
      <div className="add-filter-field">
        <div className="add-field-label">項目名：</div>
        <select className="add-field-input" value={selectedOption} onChange={(e) => handleSelect(e.target.value)}>
          <option value="">選択してください</option>
          {fields.map((field) => (
            <option key={field} value={field}>
              {field}
            </option>
          ))}
        </select>
      </div>
      <div className="add-filter-field">
        <div className="add-field-label">条件：</div>
        <input
          className="add-field-input"
          type="text"
          name="expression"
          value={additionalFilter.expression}
          onChange={handleChange}
        />
      </div>
      <div className="add-filter-field">
        <div className="add-field-label">値：</div>
        <input
          className="add-field-input"
          type="text"
          name="fieldValue"
          value={additionalFilter.fieldValue}
          onChange={handleChange}
        />
      </div>
      <br />
      <div className="filter-cmd-area">
        <div className="cmd-filter-cancel">
          <button onClick={() => props.handleClose()}>キャンセル</button>
        </div>
        <div className="cmd-filter-add">
          <button type="submit">追加</button>
        </div>
      </div>
    </form>
  );
}

export default FilterDialog;
